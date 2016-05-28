/**
 * Created by marcioheleno on 28/05/16.
 */
'use strict';

/* GET location page => Controller */
module.exports.locationInfo = function (req, res) {
  res.render('locationsInfo', {
    nome:'Farmacia Pague Menos',
    pageHeader: {title: 'Farmácia Pague Menos'},
    sidebar: {
      contexto: 'Aqui um texto falando do local como ele estar e onde fica tipo de local etc e tal texto para encher liguiça',
      callToAction: 'Segue uma texto para referenciar as qualidades ou pontos fracos.'
    },
    locations: {
      name:'Farmacia Pague Menos',
      address: 'Rua Fernandes Tavora, S/N - Henrique Jorge',
      rating: 5,
      facilities: ['Variedades de Rémedios', 'Rémedios Poupulares', 'Artigos de Higiene'],
      coordenadas: {lat: -3.759671, lng: -38.586674},
      horarioDeFuncionamento: [{
        dias: 'Segunda à Sexta',
        abertura: '7:00pm',
        fechado: '21:00pm',
        quandoFecha: false
      },{
        dias: 'Sábado',
        abertura: '8:00pm',
        fechado: '17:00pm',
        quandoFecha: false
      },{
        dias: 'Domingo',
        quandoFecha: true
      }],

      comentarios: [{
        autor: 'Márcio Heleno',
        rating: 4,
        timestamp : '09 Maio 2016',
        comentario: 'Um local legal onde compramos nossos produtos de higiene e remedios.'
      },{
        autor: 'Maria Cledeana',
        rating: 2,
        timestamp : '01 Maio 2016',
        comentario: 'Um ruim de preços elevados e mal atendimento.'
      }]
    }
  })
};
