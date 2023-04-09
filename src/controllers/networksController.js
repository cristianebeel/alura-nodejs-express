import networks from "../models/Network.js"

class NetworkController {
  static get = async (req, res) => {
    try{
      const all = await networks.find()
      res.status(200).send(all)
    } catch(err) {
      res.status(500).send({message: `Não foi possível carregar os registros. ${err.message}`})
    }
  }

  static getById = async (req, res) => {
    try {
      const id = req.params.id
      const network = await networks.findById(id)

      res.status(200).send(network)
    } catch (err) {
      res.status(400).send({message: `ID não encontrado. ${err.message}`})
    }
  }

  static post = async (req, res) => {
    let network = await new networks(req.body)
    network.save().then(() => {
      res.status(201).send(network.toJSON())
    }).catch((err) => {
      res.status(500).send({message: `Falha ao cadastrar emissora. ${err.message}`})
    })
  }

  static update = async (req, res) => {
    const id = req.params.id
    const network = await networks.findById(id)

    await networks.findByIdAndUpdate(id, {$set: req.body}).then(() => {
      res.status(200).send({message: `Emissora ${network.name} atualizada com sucesso`})
    }).catch((err) => {
      res.status(500). send({message: `Erro ao atualizar emissora. ${err.message}`})
    })
  }

  static delete = async (req, res) => {
    try {
      const id = req.params.id
      await networks.findByIdAndDelete(id)
      res.status(200).send({message: 'Emissora deletada com sucesso'})
    } catch (err) {
      res.status(500).send({message: `Erro ao deletar emissora. ${err.message}`})
    }
  }

  static async getByName(name) {
    return await networks.findOne({'name': name})
  }
}

export default NetworkController
