var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.status(200).json([
    {
      id: '00',
      model: 'iPhone 11',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMDkvMTAvMjMvMjAvMDQvMDUxMjRlNzAtYTc5YS00MTJlLTkzMzktYmRhNmQ3Yzk1MzdhL0FwcGxlX2lQaG9uZS0xMS1Qcm9fQ29sb3JzXzIuanBnIl1d/Apple_iPhone-11-Pro_Colors_2.jpg',
      os: 'iOS',
      price: '800€'
    },
    {
      id: '01',
      model: 'Samsung Galaxy S10',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMTEvMjUvMTYvNDgvNTUvYjdmMmZhNTYtMDcwNS00Y2M4LTg2OTQtN2YyOTNkZjEzNWU5L0dhbGF4eSBTMTAuanBnIl1d/Galaxy%20S10.jpg',
      os: 'Android',
      price: '500€'
    },
    {
      id: '02',
      model: 'Xiaomi Mi Note 10',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMTEvMjUvMTYvNTgvMTkvOTEyNjQ1NzItMDE3NS00MmJjLTliYjItOWNmZjYzOWJkMDEwL1hpYW9taSBNaSBOb3RlIDEwLmpwZyJdXQ/Xiaomi%20Mi%20Note%2010.jpg',
      os: 'Android',
      price: '400€'
    },
    {
      id: '03',
      model: 'OnePlus 7T',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMDkvMTEvMTMvNDkvMzQvOTcxMTA0YTYtODkxMy00MDA5LWEwNzYtOTk3MWUwZDdlOGEwL09uZVBsdXNDMkEwNyBQcm8gTWlycm9yIEdyYXkgKDIpLmpwZyJdXQ/OnePlusC2A07%20Pro%20Mirror%20Gray%20%282%29.jpg',
      os: 'Android',
      price: '300€'
    },
    {
      id: '04',
      model: 'iPhone 11',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMDkvMTAvMjMvMjAvMDQvMDUxMjRlNzAtYTc5YS00MTJlLTkzMzktYmRhNmQ3Yzk1MzdhL0FwcGxlX2lQaG9uZS0xMS1Qcm9fQ29sb3JzXzIuanBnIl1d/Apple_iPhone-11-Pro_Colors_2.jpg',
      os: 'iOS',
      price: '900€'
    },
    {
      id: '05',
      model: 'Samsung Galaxy S10',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMTEvMjUvMTYvNDgvNTUvYjdmMmZhNTYtMDcwNS00Y2M4LTg2OTQtN2YyOTNkZjEzNWU5L0dhbGF4eSBTMTAuanBnIl1d/Galaxy%20S10.jpg',
      os: 'Android',
      price: '450€'
    },
    {
      id: '06',
      model: 'Xiaomi Mi Note 10',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMTEvMjUvMTYvNTgvMTkvOTEyNjQ1NzItMDE3NS00MmJjLTliYjItOWNmZjYzOWJkMDEwL1hpYW9taSBNaSBOb3RlIDEwLmpwZyJdXQ/Xiaomi%20Mi%20Note%2010.jpg',
      os: 'Android',
      price: '250€'
    },
    {
      id: '07',
      model: 'OnePlus 7T',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMDkvMTEvMTMvNDkvMzQvOTcxMTA0YTYtODkxMy00MDA5LWEwNzYtOTk3MWUwZDdlOGEwL09uZVBsdXNDMkEwNyBQcm8gTWlycm9yIEdyYXkgKDIpLmpwZyJdXQ/OnePlusC2A07%20Pro%20Mirror%20Gray%20%282%29.jpg',
      os: 'Android',
      price: '300€'
    },
    {
      id: '09',
      model: 'Samsung Galaxy S10',
      img: 'https://www.kelisto.es/system/images/W1siZiIsIjIwMTkvMTEvMjUvMTYvNDgvNTUvYjdmMmZhNTYtMDcwNS00Y2M4LTg2OTQtN2YyOTNkZjEzNWU5L0dhbGF4eSBTMTAuanBnIl1d/Galaxy%20S10.jpg',
      os: 'Android',
      price: '400€'
    }
  ]);
});

module.exports = router;
