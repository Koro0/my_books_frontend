
const Footer = () => {
    const toDate:Date = new Date(Date.now());
    return(
        <footer className="footer">
            <div className="footer__Copy">Copyright YD  {toDate.getFullYear()} </div>
        </footer>
    )
}
export default Footer