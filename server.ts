import express from 'express'
import connectDB from './db'
import cors from 'cors'
import users from './routes/userRoutes'
import heroTemplates from './routes/heroTemplateRoutes'
import spells from './routes/spellRoutes'

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', users)
app.use('/api/spell', spells)
app.use('/api/hero/template', heroTemplates)

const PORT = 5000

app.get('/', (_, res: any) => res.send('API is running..s'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
