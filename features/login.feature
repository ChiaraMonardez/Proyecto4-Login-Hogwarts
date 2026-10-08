# language: es
Característica: Login de la Obra Social de los Trabajadores de Hogwarts
  Como afiliado de la Obra Social
  Quiero iniciar sesión con mi correo y mi contraseña
  Para poder gestionar mis reintegros

  Antecedentes:
    Dado que estoy en la página de login

  @mensajes-de-error
  Esquema del escenario: <id> - <descripcion>
    Cuando ingreso el correo "<correo>" y la contraseña "<contrasena>"
    Y presiono el botón Ingresar
    Entonces debería ver el mensaje de error "<mensaje>"
    Y debería permanecer en la página de login

    Ejemplos:
      | id     | descripcion                                | correo           | contrasena   | mensaje                                             |
      | LOG-01 | Correo vacío, pass vacío                   |                  |              | Por favor, completa ambos campos.                   |
      | LOG-02 | Correo vacío, pass válido                  |                  | hermione2025 | Por favor, completa ambos campos.                   |
      | LOG-03 | Correo vacío, pass inválido                |                  | 123          | Por favor, completa ambos campos.                   |
      | LOG-04 | Correo válido registrado, pass vacío       | ron@hogwarts.com |              | Por favor, completa ambos campos.                   |
      | LOG-06 | Correo válido registrado, pass inválido    | ron@hogwarts.com | 123          | Usuario correcto, pero la contraseña es incorrecta. |
      | LOG-07 | Correo válido NO registrado, pass vacío    | vyvs@mail.com    |              | Por favor, completa ambos campos.                   |
      | LOG-08 | Correo válido NO registrado, pass válido   | vyvs@mail.com    | hermione2025 | El usuario no es correcto.                          |
      | LOG-09 | Correo válido NO registrado, pass inválido | vyvs@mail.com    | 123          | El usuario no es correcto.                          |
      | LOG-10 | Correo inválido, pass vacío                | harry.com        |              | Por favor, completa ambos campos.                   |
      | LOG-11 | Correo inválido, pass válido               | harry.com        | hermione2025 | Por favor, ingrese un correo electrónico válido.    |
      | LOG-12 | Correo inválido, pass inválido             | harry.com        | 123          | Por favor, ingrese un correo electrónico válido.    |

  @LOG-05
  Escenario: LOG-05 - Correo válido registrado, pass válido
    Cuando ingreso el correo "ron@hogwarts.com" y la contraseña "hermione2025"
    Y presiono el botón Ingresar
    Entonces debería ser redirigido a la página principal
    Y no debería ver ningún mensaje de error

  @LOG-13 @defecto
  Escenario: LOG-13 - 3 intentos fallidos con correo válido registrado, pass inválido
    Cuando intento iniciar sesión 3 veces con el correo "ron@hogwarts.com" y la contraseña "123"
    Entonces debería ver el mensaje de error "Usuario correcto, pero la contraseña es incorrecta."
    Y debería ver la advertencia "Atención, su cuenta está a punto de ser bloqueada."
