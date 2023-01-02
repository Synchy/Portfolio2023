import { ReactComponent as Download } from "../assets/svg/download.svg"

const DownloadButton = props => {
    const downloadFile = () => {
        window.location.href = "/src/assets/files/cv.pdf"
    }
    return (
        <button onClick={downloadFile}> 
            <Download/>
        </button>
    )
}

export default DownloadButton