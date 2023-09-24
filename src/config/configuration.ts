import ip from 'ip'

const env = process.env.NODE_ENV || 'development'
const configuration = () => ({
  server: {
    env,
    port: parseInt(process.env.PORT, 10) || 10000,
    ip: ip.address(),
  },
  admin: {
    privKey: process.env.PRIV_KEY || '',
  },
  storage: {
    maxSize: '5000000', // 5MB
    bucket: 'storage-file',
    supabaseURL: process.env.SUPABASE_URL || '',
    supabaseKEY: process.env.SUPABASE_KEY || '',
  },
})

export type EnvironmentVariables = ReturnType<typeof configuration>

export default configuration
