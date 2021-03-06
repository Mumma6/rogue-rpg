import express from 'express'
import connectDB from './db'
import cors from 'cors'
import users from './routes/userRoutes'
import heroTemplates from './routes/heroTemplateRoutes'
import spells from './routes/spellRoutes'
import itemTypes from './routes/itemRoutes/itemTypeRoutes'
import enemies from './routes/enemiesRoutes'
import itemPrefixs from './routes/itemRoutes/itemPrefixRoutes'
import itemSuffixs from './routes/itemRoutes/itemSuffixRoutes'
import itemRaritys from './routes/itemRoutes/itemRarityRoutes'

connectDB()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/users', users)
app.use('/api/spell', spells)
app.use('/api/items/type', itemTypes)
app.use('/api/hero/template', heroTemplates)
app.use('/api/enemies', enemies)
app.use('/api/items/prefix', itemPrefixs)
app.use('/api/items/suffix', itemSuffixs)
app.use('/api/items/rarity', itemRaritys)

const PORT = 5000

app.get('/', (_, res: any) => res.send('API is running..s'))

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
