/**
 * Created by marcioheleno on 28/05/16.
 */
'use strict';

/* GET home => controller */
module.exports.homelist = function (req, res) {
  res.render('index', {
    title: 'Loc8r vamos la mais um teste',
    content: 'Find places to work with wifi near you!'
  })
};
/* GET locationlist => Controller */
module.exports.localList = function (req, res) {
  res.render('locaisList', {
    title : 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: 'Veja as Melhoras Opções pelas opiniões de nosso usuários, comente e deixe-nos saber sua opnião!',
    locations: [{
      name: 'Farmacia Pague Menos',
      address: 'Rua Fernandes Tavora, S/N - Henrique Jorge',
      rating: 5,
      facilities: ['Variedades de Rémedios', 'Rémedios Poupulares', 'Artigos de Higiene'],
      distance: '450m'
    },{
      name: 'Farmacia Aldesul',
      address: 'Rua Vitoria, 1200 - Henrique Jorge',
      rating: 4,
      facilities: ['Entrega Rápida', 'Atendimento Ambulatorial'],
      distance: '150m'
    },{
      name: 'Farmacia Droga Nunes',
      address: 'Rua Fernandes Tavora, 3000 Henrique Jorge',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      distance: '850m'
    }]
  });
};
