import Swal from 'sweetalert2'
import { AppState } from '../AppState'

const confirm = '#2A783B'
const cancel = '#BD3428'
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
        confirmButtonColor: confirm,
        cancelButtonColor: cancel,
        confirmButtonText: confirmButtonText
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
      confirmButtonColor: confirm,
      cancelButtonColor: cancel
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
        confirmButtonColor: confirm,
        cancelButtonColor: cancel
      })

      if (weapon) {
        this.toast(`You chose a ${weapon}!`, 'success')
        AppState.character.equipment.weapons.push(weapon)
      }
    }
    if (type === 'Simple') {
      const { value: weapon } = await Swal.fire({
        title: `Select your ${type} Weapon`,
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
        confirmButtonColor: confirm,
        cancelButtonColor: cancel
      })

      if (weapon) {
        this.toast(`You chose a ${weapon}!`, 'success')
        AppState.character.equipment.weapons.push(weapon)
      }
    }
  }

  // SECTION Character Info Modal
  static async multiModal(name = '', age = AppState.race.age.max / 2, gender = 'Androgynous', alignment = 'True_Neutral', imgUrl = '') {
    // eslint-disable-next-line vue/one-component-per-file
    await Swal.mixin({
      input: 'text',
      confirmButtonText: 'Next &rarr;',
      confirmButtonColor: confirm,
      cancelButtonColor: cancel,
      progressSteps: [1, 2, 3, 4, 5]
    }).queue([
      {
        title: "What is your character's name?",
        icon: 'question',
        inputPlaceholder: 'The Nameless One',
        inputValue: name
      },
      {
        title: 'How old is your character?',
        icon: 'question',
        input: 'range',
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
          Androgynous: 'Androgynous',
          Female: 'Female'
        },
        inputValue: gender
      },
      {
        title: "What is your character's alignment?",
        icon: 'question',
        input: 'select',
        inputOptions: {
          Lawful: {
            Lawful_Good: 'Lawful Good',
            Lawful_Neutral: 'Lawful Neutral',
            Lawful_Evil: 'Lawful Evil'
          },
          Neutral: {
            Neutral_Good: 'Neutral Good',
            True_Neutral: 'True Neutral',
            Neutral_Evil: 'Neutral Evil'
          },
          Chaotic: {
            Chaotic_Good: 'Chaotic Good',
            Chaotic_Neutral: 'Chaotic Neutral',
            Chaotic_Evil: 'Chaotic Evil'
          }
        },
        inputValue: alignment.replace(' ', '_')
      },
      {
        title: 'What does your character look like?',
        icon: 'info',
        input: 'text',
        text: 'Paste an Image URL below',
        inputPlaceholder: "We've provided you a placeholder",
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
          AppState.activeCharacter.gender = 'Androgynous'
        } else {
          AppState.activeCharacter.gender = result.value[2]
        }
        if (result.value[3] === '') {
          AppState.activeCharacter.alignment = 'True Neutral'
        } else {
          AppState.activeCharacter.alignment = result.value[3].replace('_', ' ')
        }
        if (result.value[4] === '') {
          AppState.activeCharacter.imgUrl = 'http://www.geocities.ws/Area51/Orion/3107/Lance21.jpg'
        } else {
          AppState.activeCharacter.imgUrl = result.value[4]
        }
        AppState.save = true
      } else {
        AppState.save = false
      }
    })
  }

  // SECTION Custom Notification Modal
  static notify(icon = 'success', title = 'Success!', text = 'Quite a fine choice!') {
    Swal.fire({
      icon: icon,
      title: title,
      text: text,
      confirmButtonColor: confirm,
      cancelButtonColor: cancel
    })
  }

  // SECTION Information Modal
  static expand(title, body) {
    Swal.fire({
      title: title,
      icon: 'question',
      text: body,
      confirmButtonColor: confirm
    })
  }
}
