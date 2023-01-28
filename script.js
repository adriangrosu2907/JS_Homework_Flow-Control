<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Home</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />

    <link rel="stylesheet" href="styles.css" />
    <script type="module" src="script.js"></script>
  </head>
  <body>
    <div class="formularTaxe">
      <h1>Calculator Taxe Autovehicule</h1>
      <form method="GET" id="form" target="_self">
        <div>
          <label for="vehicleType">Alegeti tipul autovehiculului:</label>
          <select name="vehicleType" id="vehicle">
            <option value="Motocicleta">Motocicleta</option>
            <option value="Autoturism">Autoturism</option>
            <option value="Autocar">Autocar</option>
            <option value="Tractor">Tractor</option>
            <option value="Alt vehicul">Alt vehicul</option>
          </select>
        </div>
        <div>
          <label for="vehicleCC">Introduceti capacitate cilindrica:</label>
          <input type="number" name="vehicleCC" id="vehicleCC" required />
        </div>
        <button type="button" onclick="submitForm()">Submit</button>
      </form>
    </div>
  </body>
</html>

