export async function getCurrentLocation() {
  if (!navigator.geolocation) {
    alert("Este navegador no puede acceder a la localizacion");
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        resolve([coords.latitude, coords.longitude]);
      },
      (err) => {
        alert("No se pudo obtener la localizacion");
        console.log(err);
        reject();
      }
    );
  });
}
