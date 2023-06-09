
const Footer = () => {
    const toDate:Date = new Date(Date.now());
    return(
        <div className="footer">
            {/*<div className="footer__Box">
                <div className="footer__Social">
                    <p>social icons </p>
                    <p>social icons </p>
                    <p>social icons </p>
                </div>
                <div className="footer__Recipe">
                    <h3>Recette</h3>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>..</li>
                    </ul>
                </div>
                <div className="footer__Thematique">
                    <h3>Thematique</h3>
                </div>
            </div>*/}
            <div className="footer__Copy">Copyright YD  {toDate.getFullYear()} </div>
        </div>
    )
}
export default Footer