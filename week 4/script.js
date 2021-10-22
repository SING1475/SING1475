console.log(window)
console.log(document)
console.log(window.document.getElementById('container'))

const $container = document.getElementById('container')
console.log($container)

// $container.textContent = `i am a container` //

const $name = document.getElementById('name')
$name.textContent = ' Harman singh '

const $studentNumber = document.querySelector('.student-number')
$studentNumber.textContent += ' 12344'

const $enrollement = document.querySelector('p:nth-child(3)')
$enrollement.textContent = ' full time '

console.log(document.querySelector('p'))

console.log($container.children)
console.log($container.children[3] )
const $active = $container.children[3]
$active.textContent = 'Active'

console.log($name.getAttribute('id'))

document.querySelector('a').setAttribute('href', 'http://facebook.com')

// weeek 4 second class
//
//
//








