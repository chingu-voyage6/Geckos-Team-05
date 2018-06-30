// TEMPORARY DATABASE TEST -- DELETE WHEN DATABASE IS LINKED TO API

var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var TestItem = require("../models/test");

// Delete existing data before seeding
TestItem.collection.drop();

var george = new TestItem({
  author: 'haber7.com',
  title: 'Biletix kullanıcılarının bilgileri çalındı! Kredi kartı hesabınızı kontrol edin!',
  description: 'Biletix, müşterilerinin bilgilerinin çalındığını doğruladı. 2006 yılında bütün hisselerini ABD\'li bilet firması Ticketmaster\'a satan Biletix, özür dileyerek müşterilerinin şifrelerini değiştirmelerini istedi. Peki kimler bu durumdan etkilendi? Bilgileri çalın…',
  url: 'http://www.haber7.com/guncel/haber/2658583-biletix-kullanicilarinin-bilgileri-calindi-kredi-karti-hesabinizi-kontrol-edin',
  urlToImage: 'http://i2.haber7.net//haber/haber7/photos/2018/26/biletix_kullanicilarinin_bilgileri_calindi_kredi_karti_hesabini_kontrol_edin_1530258010_6335.png',
  publishedAt: '2018-06-29T07:42:07Z'
});
var sam = new TestItem({
  author: 'TASR',
  title: 'Motoristom mierne zdraželo tankovanie 98-oktánového benzínu a LPG',
  description: 'Ceny motorovej nafty a CNG zostali nezmenené, keď za liter nafty motoristi zaplatili 1,275 eura.',
  url: 'http://www.teraz.sk/ekonomika/susr-motoristom-mierne-zdrazelo-tankovan/334031-clanok.html',
  urlToImage: 'https://www3.teraz.sk/usercontent/photos/a/d/3/4-ad3836419e7a1888ba2fd19c0cec8fb0326376e5.jpg',
  publishedAt: '2018-06-29T07:42:00Z'
});
var michael = new TestItem({
  author: null,
  title: 'จับเสี่ยเบนซ์ขนเงินกว่า 30 ล้านไป สปป.ลาว',
  description: 'ที่ด่านพรมแดนสะพานมิตรภาพไทย&ndash;ลาว แห่งที่ 1&nbsp; จังหวัดหนองคาย&nbsp;&nbsp; เจ้าหน้าที่ด่านศุลกากรหนองคาย&nbsp; และตรวจคนเข้าเมืองหนองคาย&nbsp; ร่วมกันจับกุมนายขันธ์ สารสุวรรณ อายุ 55 ปี&nbsp; ชาวอำเภอด่านช้าง&nbsp; จังหวัดสุพรรณบุรี…',
  url: 'http://news.ch7.com/detail/292804',
  urlToImage: 'http://www.ch7.com/images/2f76ead1bc6540eb8cbcba0137b1c27e/7915.jpg',
  publishedAt: '2018-06-29T07:41:55Z'
});

george.save()
  .then(michael.save())
  .then(sam.save())
  .then(() => console.log("DATABASE IS LINKED & SAVING DATA!"));

  module.exports = router;
