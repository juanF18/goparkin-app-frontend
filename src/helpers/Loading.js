import loading from "../assets/gif/loading.gif";
export function Loading() {
  let styles = {
    width: "100px",
    height: "100px",
    marginTop: "200px",
  };
  return <img src={loading} style={styles} alt="loading" />;
}
