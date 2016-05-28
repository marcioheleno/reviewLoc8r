/**
 * Created by marcioheleno on 28/05/16.
 */
'use strict';

/* GET addReview / Comentário page => Controller */
module.exports.addReview = function (req, res) {
  res.render('addReview', {
    title : 'Adicionar um Comentário',
    pageHeader : {
      titleComent : 'Comentários Pague Menos'
    }
  });
};

