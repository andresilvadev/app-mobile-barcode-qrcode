import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: BarcodeScannerOptions;
  encodeText: string = '';
  encodedData: any = {};
  scannedData: any = {};

  constructor(
    public navCtrl: NavController,
    public scanner: BarcodeScanner) {
  }

  scan() {
    this.options = {
      prompt: 'Aponte para seu código de barra'
    };
    this.scanner.scan(this.options)
      .then((data) => {
        this.scannedData = data;
        console.log('Barcode data: ', this.scannedData);
     }, (err) => {
        console.log('Error: ', err);
     })
  }

  encode() {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodeText)
      .then((data) => {
        this.encodedData = data;
      }, (err) => {
        console.log('Error: ', err);
    })
  }



}
