
function Image() {
    return (
        <>
            <div style={{ position: "relative" }}>
                <img src='./img/god.jpg' alt='aicap' style={{ width: "100%", height: "auto" }}></img>
                <h3 style={{ position: "absolute", top: "90%", left: "43%", color: "white", fontFamily: "Cinzel Decorative" }}>
                    Yugi Shop Legendery
                </h3>
                <p style={{ color: "white", position: "absolute", top: "95%", right: "42%", fontFamily: "Cinzel Decorative", fontSize: "18px" }}>Where Duelists Become Legends</p>
            </div>

            <div style={{ display: "flex", alignItems: "center" }}>
                <hr style={{ flex: 1, border: "none", height: "1px ", backgroundColor: "#800000" }}></hr>
                <button style={{ margin: "0 10px", borderRadius: "8px", backgroundColor: "#800000", color: "white" }}>Products</button>
                <hr style={{ flex: 1, border: "none", height: "1px", backgroundColor: "#800000" }}></hr>
            </div>
        </>
    )
}
export default Image