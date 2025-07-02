<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Rancho Admin</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="center">
    <h1>Admin Dashboard</h1>

    <form id="loginDiv">
      <input id="u" placeholder="Username">
      <input id="p" type="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>

    <div id="dash" style="display:none;">
      <button id="logout">Logout</button>
      <hr>
      <div class="section">
        <h2>Change Password</h2>
        <input id="np" placeholder="New password"><button id="setPwd">Save</button>
      </div>
      <hr>
      <div class="section">
        <h2>Upload CSV / JSON</h2>
        <label>AP Distribution (.csv)</label><br>
        <input type="file" id="fap"><br><br>
        <label>AR Distribution (.csv)</label><br>
        <input type="file" id="far"><br><br>
        <label>PM List (.csv)</label><br>
        <input type="file" id="fpm"><br><br>
        <label>NLM List (.csv)</label><br>
        <input type="file" id="fnlm"><br><br>
        <button id="up">Upload All</button>
      </div>
    </div>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.4.1/papaparse.min.js"></script>
  <script src="admin.js"></script>
</body>
</html>
