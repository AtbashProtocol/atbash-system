import * as ed from '@noble/ed25519'

import { Injectable } from '@nestjs/common'
import configuration from 'config/configuration'

@Injectable()
export class ECService {
  private privateKey = BigInt('0x' + configuration().admin.privKey)

  decrypt(message: string, r: string) {
    const C = ed.Point.fromHex(message)
    const R = ed.Point.fromHex(r)
    const M = C.subtract(R.multiply(this.privateKey))
    return { message: M.toHex() }
  }
}
