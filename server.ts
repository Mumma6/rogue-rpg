import express from 'express'
import connectDB from './db'
import users from './routes/userRoutes'

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', users)

const PORT = 5000

app.get('/', (_, res: any) => res.send('API is running..s'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
