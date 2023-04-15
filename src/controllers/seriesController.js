import series from '../models/Serie.js'
import NetworkController from './networksController.js'

class SerieController {

  static async get(req, res) {
    try{
      await series.find()
        .populate('network')
        .then((series) => {
          res.status(200).json(series)
        })
    } catch(err) {
      res.status(500).send({
        message: `Não foi possível carregar os registros. ${err.message}`
      })
    }
  }

  

  static getById = async (req, res) => {
    try {
      const id = req.params.id
      await series.findById(id)
      .populate('network', 'name')
      .then((series) => {
        if(series != null){
          res.status(200).send(series)
        }
      })
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
    } catch(err) {
      res.status(500).send({message: `Erro ao deletar série. ${err.message}`})
    }
  }

  static getByNetwork = async (req, res) => {
    try {
      const networkName = req.query.network
      const network = await NetworkController.getByName(networkName)
  
      if(!network) {
        res.status(404).json({message: "Network not found"})
      } else {
        const s = await series.find({'network': network._id})
        .populate('network')
        
        res.status(200).json(s)
     } 
    } catch(err) {
      res.status(500).send({message: `Erro ao buscar emissora. ${err.message}`})
    }
  }
}

export default SerieController
