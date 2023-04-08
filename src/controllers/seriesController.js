import series from '../models/Serie.js'

class SerieController {
  static get = async (req, res) => {
    try{
      const all = await series.find()
      res.status(200).send(all)
    } catch(err) {
      res.status(500).send({message: `Não foi possível carregar os registros. ${err.message}`})
    }
  }

  static getById = async (req, res) => {
    try {
      const id = req.params.id
      const serie = await series.findById(id)

      res.status(200).send(serie)
    } catch (err) {
      res.status(400).send({message: `ID não encontrado. ${err.message}`})
    }
  }

  static post = async (req, res) => {
    let serie = await new series(req.body)
    serie.save().then(() => {
      res.status(201).send(serie.toJSON())
    }).catch((err) => {
      res.status(500).send({message: `Falha ao cadastrar série. ${err.message}`})
    })
  }

  static update = async (req, res) => {
    const id = req.params.id
    const serie = await series.findById(id)

    await series.findByIdAndUpdate(id, {$set: req.body}).then(() => {
      res.status(200).send({message: `Série ${serie.title} atualizada com sucesso`})
    }).catch((err) => {
      res.status(500). send({message: `Erro ao atualizar série. ${err.message}`})
    })
  }

  static delete = async (req, res) => {
    try {
      const id = req.params.id
      await series.findByIdAndDelete(id)
      res.status(200).send({message: 'Série deletada com sucesso'})
    } catch (err) {
      res.status(500).send({message: `Erro ao deletar série. ${err.message}`})
    }
  }
}

export default SerieController
