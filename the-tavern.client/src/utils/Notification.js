import Swal from 'sweetalert2'
import { AppState } from '../AppState'

export default class Notification {
  /**
 *
 * @param {string} title The title text.
 * @param {string} text The body text.question
 * @param {string} icon 'success', 'error', 'info', 'warning', or ''.
 * @param {string} confirmButtonText The text of your confirm button.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */

  // SECTION Confirmation Modal
  static async confirmAction(title = 'Final Answer?', text = 'Is this the answer you want to choose?', icon = 'warning', confirmButtonText = "I'm sure!") {
    try {
      const res = await Swal.fire({
        title: title,
        text: text,
        icon: icon,
        showCancelButton: true,
        confirmButtonColor: '#587439',
        cancelButtonColor: '#ae2d26',
        confirmButtonText: confirmButtonText,
        background: '#faf6dd'
      })
      if (res.isConfirmed) {
        return true
      }
      return false
    } catch (error) {
      return false
    }
  }

  /**
 *
 * @param {string} title The title text
 * @param {string} display 'success', 'error', 'info', 'warning', or 'question'.
 * @param {string} position 'top', 'top-start', 'top-end', 'center', 'center-start', 'center-end', 'bottom', 'bottom-start', or 'bottom-end'.
 * @param {number} timer Time in milliseconds.
 * @param {boolean} progressBar Show progress bar or not respectively.
 * -----------------------------------
 * {@link https://sweetalert2.github.io/#configuration|Check out Sweet Alerts}
 */

  // SECTION Notification Modal
  static toast(title = 'Warning!', display = 'warning', position = 'top-end', timer = 3000, progressBar = true) {
    Swal.fire({
      title: title,
      icon: display,
      position: position,
      timer: timer,
      timerProgressBar: progressBar,
      toast: true,
      showConfirmButton: false,
      confirmButtonColor: '#587439',
      background: '#faf6dd'
    })
  }

  // SECTION Weapon Selection Modal
  static async weaponChoice(type) {
    if (type === 'Martial') {
      const { value: weapon } = await Swal.fire({
        title: `Select your ${type} Weapon`,
        input: 'select',
        inputOptions: {
          Melee: {
            Battleaxe: 'Battleaxe',
            Flail: 'Flail',
            Glaive: 'Glaive',
            Greataxe: 'Greataxe',
            Greatsword: 'Greatsword',
            Lance: 'Lance',
            Longsword: 'Longsword',
            Maul: 'Maul',
            Morningstar: 'Morningstar',
            Pike: 'Pike',
            Rapier: 'Rapier',
            Scimitar: 'Scimitar',
            Shortsword: 'Shortsword',
            Trident: 'Trident',
            Warhammer: 'Warhammer',
            Whip: 'Whip'
          },
          Ranged: {
            Blowgun: 'Blowgun',
            HandCrossbow: 'Hand Crossbow',
            Shortbow: 'Shortbow',
            Sling: 'Sling'
          }
        },
        inputPlaceholder: 'Select a weapon',
        showCancelButton: true,
        confirmButtonColor: '#587439',
        cancelButtonColor: '#ae2d26',
        background: '#faf6dd'
      })

      if (weapon) {
        this.toast(`You chose a ${weapon}!`, 'success')
        AppState.character.equipment.weapons.push(weapon)
      }
    } else if (type === 'Simple') {
      const { value: weapon } = await Swal.fire({
        title: 'Select field validation',
        input: 'select',
        inputOptions: {
          Melee: {
            Club: 'Club',
            Dagger: 'Dagger',
            Greatclub: 'Greatclub',
            Handaxe: 'Handaxe',
            Javelin: 'Javelin',
            LightHammer: 'Light Hammer',
            Mace: 'Mace',
            Quarterstaff: 'Quarterstaff',
            Sickle: 'Sickle',
            Spear: 'Spear',
            Rapier: 'Rapier',
            Scimitar: 'Scimitar',
            Shortsword: 'Shortsword',
            Trident: 'Trident',
            Warhammer: 'Warhammer',
            Whip: 'Whip'
          },
          Ranged: {
            LightCrossbow: 'Light Crossbow',
            Dart: 'Dart',
            Shortbow: 'Heavy Crossbow',
            Longbow: 'Longbow',
            Net: 'Net'
          }
        },
        inputPlaceholder: 'Select a weapon',
        showCancelButton: true,
        confirmButtonColor: '#587439',
        cancelButtonColor: '#ae2d26',
        background: '#faf6dd'
      })

      if (weapon) {
        this.toast(`You chose a ${weapon}!`, 'success')
        AppState.character.equipment.weapons.push(weapon)
      }
    }
  }

  // SECTION Character Info Modal
  static async multiModal(name = AppState.activeCharacter.name, age = AppState.activeCharacter.age, gender = AppState.activeCharacter.gender, alignment = AppState.activeCharacter.alignment, imgUrl = AppState.activeCharacter.imgUrl) {
    // eslint-disable-next-line vue/one-component-per-file
    await Swal.mixin({
      title: "Don't forget personal information!",
      text: 'You can change this later...',
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      confirmButtonColor: '#587439',
      progressSteps: [1, 2, 3, 4, 5]
    }).queue([
      {
        title: "What is your character's name?",
        icon: 'question',
        text: 'Name...',
        inputValue: name
      },
      {
        title: 'How old is your character?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Age...',
        inputAttributes: {
          min: `${AppState.race.age.min}`,
          max: `${AppState.race.age.max}`,
          step: 1
        },
        inputValue: age
      },
      {
        title: "What is your character's gender?",
        icon: 'question',
        input: 'select',
        inputOptions: {
          Male: 'Male',
          NonBinary: 'Non-Binary',
          Female: 'Female'
        },
        inputPlaceholder: 'Gender...',
        inputValue: gender
      },
      {
        title: "What is your character's alignment?",
        icon: 'question',
        input: 'select',
        inputOptions: {
          Lawful: {
            Lawful_Good: 'Good',
            Lawful_Neutral: 'Neutral',
            Lawful_Evil: 'Evil'
          },
          Neutral: {
            Neutral_Good: 'Good',
            True_Neutral: 'Neutral',
            Neutral_Evil: 'Evil'
          },
          Chaotic: {
            Chaotic_Good: 'Good',
            Chaotic_Neutral: 'Neutral',
            Chaotic_Evil: 'Evil'
          }
        },
        inputPlaceholder: 'Alignment...',
        inputValue: alignment.replace(' ', '_')
      },
      {
        title: 'What does your character look like?',
        icon: 'info',
        input: 'text',
        inputPlaceholder: "We'll provide you a placeholder by default",
        inputValue: imgUrl
      }
    ]).then((result) => {
      if (result.value) {
        if (result.value[0] === '') {
          AppState.activeCharacter.name = 'The Nameless One'
        } else {
          AppState.activeCharacter.name = result.value[0]
        }
        if (result.value[1] === '') {
          AppState.activeCharacter.age = 'Ageless'
        } else {
          AppState.activeCharacter.age = parseInt(result.value[1])
        }
        if (result.value[2] === '') {
          AppState.activeCharacter.gender = 'Non-Binary'
        } else {
          AppState.activeCharacter.gender = result.value[2]
        }
        if (result.value[3] === '') {
          AppState.activeCharacter.alignment = 'True-Neutral'
        } else {
          AppState.activeCharacter.alignment = result.value[3].replace('_', ' ')
        }
        if (result.value[4] === '') {
          AppState.activeCharacter.imgUrl = 'http://www.geocities.ws/Area51/Orion/3107/Lance21.jpg'
        } else {
          AppState.activeCharacter.imgUrl = result.value[4]
        }
      }
    })
  }

  // SECTION Custom Notification Modal
  static notify(str) {
    Swal.fire({
      icon: 'success',
      title: `${str}!`,
      text: 'Quite a fine choice!',
      confirmButtonColor: '#247c78',
      background: '#faf6dd'
    })
  }

  // SECTION Information Modal
  static expand(obj) {
    Swal.fire({
      icon: 'info',
      title: `${obj.title}!`,
      text: `${obj.body}`,
      confirmButtonColor: '#247c78',
      background: '#faf6dd'
    })
  }
}
