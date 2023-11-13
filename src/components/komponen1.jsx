import { useNavigate } from "react-router-dom";

const Komponen1 = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>
                AKAJHSJAHSJAJSAGGSHKGGAHSGAHKGS
                <button onClick={() => navigate('/Qr')}>Go to Qr</button>
            </h1>
        </>
    );
};

export default Komponen1;