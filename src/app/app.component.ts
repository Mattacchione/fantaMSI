import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  playerPoolTop: any
  playerPoolJng: any
  playerPoolMid: any
  playerPoolAdc: any
  playerPoolSupp: any
  playerPoolCoach: any

  comp: any

  valdiComp: boolean

  constructor() {

    this.valdiComp = false

    this.comp = {
      top: {},
      jungle: {},
      mid: {},
      adc: {},
      supp: {},
      coach: {}
    }

    this.playerPoolTop = [
      {
        player: 'Xiaohu',
        team: 'RNG',
        value: 35
      },
      {
        player: 'Armut',
        team: 'MAD',
        value: 30
      },
      {
        player: 'Khan',
        team: 'DW',
        value: 25
      },
      {
        player: 'Fudge',
        team: 'C9',
        value: 20
      },
      {
        player: 'Hanabi',
        team: 'PSG',
        value: 15
      },
      {
        player: 'BioPhanter',
        team: 'PGG',
        value: 10
      },
    ]
    this.playerPoolJng = [
      {
        player: 'Wei',
        team: 'RNG',
        value: 35
      },
      {
        player: 'Elyoya',
        team: 'MAD',
        value: 30
      },
      {
        player: 'River',
        team: 'PSG',
        value: 25
      },
      {
        player: 'Canyon',
        team: 'DW',
        value: 20
      },
      {
        player: 'Blaber',
        team: 'C9',
        value: 15
      },
      {
        player: 'Pabu',
        team: 'PGG',
        value: 10
      },
    ]
    this.playerPoolMid = [
      {
        player: 'Perkz',
        team: 'C9',
        value: 35
      },
      {
        player: 'Crylin',
        team: 'RNG',
        value: 30
      },
      {
        player: 'Maple',
        team: 'PSG',
        value: 25
      },
      {
        player: 'Humanoid',
        team: 'MAD',
        value: 20
      },
      {
        player: 'Showmaker',
        team: 'DW',
        value: 15
      },
      {
        player: 'Chazz',
        team: 'PGG',
        value: 10
      },
    ]
    this.playerPoolAdc = [
      {
        player: 'GALA',
        team: 'RNG',
        value: 35
      },
      {
        player: 'Carzzy',
        team: 'MAD',
        value: 30
      },
      {
        player: 'Ghost',
        team: 'DW',
        value: 25
      },
      {
        player: 'Doggo',
        team: 'PSG',
        value: 20
      },
      {
        player: 'Zven',
        team: 'C9',
        value: 15
      },
      {
        player: 'Praedyth',
        team: 'PGG',
        value: 10
      },
    ]
    this.playerPoolSupp = [
      {
        player: 'Ming',
        team: 'RNG',
        value: 35
      },
      {
        player: 'Kaiser',
        team: 'MAD',
        value: 30
      },
      {
        player: 'Vulcan',
        team: 'C9',
        value: 25
      },
      {
        player: 'Kaiwing',
        team: 'PSG',
        value: 20
      },
      {
        player: 'BeryL',
        team: 'DW',
        value: 15
      },
      {
        player: 'Decoy',
        team: 'PGG',
        value: 10
      },
    ]
    this.playerPoolCoach = [
      {
        player: 'Poppy',
        team: 'RNG',
        value: 35
      },
      {
        player: 'kkOma',
        team: 'C9',
        value: 30
      },
      {
        player: 'Mac',
        team: 'MAD',
        value: 25
      },
      {
        player: 'Reignover',
        team: 'C9',
        value: 20
      },
      {
        player: 'Helper',
        team: 'PSG',
        value: 15
      },
      {
        player: 'Charlie',
        team: 'RNG',
        value: 10
      },
    ]
  }

  ngOnInit(): void {
  }

  calculateCredit() {
    const top = this.comp.top?.value ? this.comp.top?.value : 0
    const jungle = this.comp.jungle?.value ? this.comp.jungle?.value : 0
    const mid = this.comp.mid?.value ? this.comp.mid?.value : 0
    const adc = this.comp.adc?.value ? this.comp.adc?.value : 0
    const supp = this.comp.supp?.value ? this.comp.supp?.value : 0
    const coach = this.comp.coach?.value ? this.comp.coach?.value : 0
    let value = 135 - top - jungle - mid - adc - supp -coach
    return value
  }

  verifyComp() {
    if (this.calculateCredit() <= 135) {
      let rng = 0, mad = 0, dw = 0, c9 = 0, psg = 0, pgg = 0
      for (const [key, value] of Object.entries(this.comp)) {
        if (key !== 'coach') {
          switch (value['team']) {
            case 'RNG':
              rng++
              break;
            case 'MAD':
              mad++
              break;
            case 'DW':
              dw++
              break;
            case 'C9':
              c9++
              break;
            case 'PSG':
              psg++
              break;
            case 'PGG':
              pgg++
              break;
          }
        }
      }
      if (rng > 2 || mad > 2 || dw > 2 || c9 > 2 || psg > 2 || pgg > 2) {
        this.valdiComp = false
      } else {
        this.valdiComp = true
      }
    } else {
      console.log('value false')
      this.valdiComp = false
    }
  }

}