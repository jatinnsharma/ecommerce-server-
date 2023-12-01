import dotenv from 'dotenv'

dotenv.config()

const config ={
    PORT:process.env.PORT || 8000,
    MONGO_URL: process.env.MONGO_URI,
    JWT_SECRET:process.env.JWT_SECRET,
    JWT_EXPIRY:process.env.JWT_EXPIRY
}

export default config;