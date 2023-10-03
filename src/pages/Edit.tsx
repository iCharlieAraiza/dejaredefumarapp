import { useContext, useState } from "react";

import MainLayout from "../layout/MainLayout";
import EditForm from "../components/EditForm";

import { Tabs } from "../components/Tabs";
import CheckDone from "../components/CheckDone";

import { GlobalContext } from "../context/GlobalContext";

import { EditPagePlaceholder } from "../components/Placeholder";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

export const Edit = () => {
  const [tabValue, setTabValue] = useState(1);
  const { profile } = useContext(GlobalContext);
  const [currentProfile, loading] = profile;

  return (
    <MainLayout>
      <div className="separator"></div>
      <div className="container">
        <div className="main__two-column">
          <div className="column-1 col-left">
            <h1>Actualiza tu información</h1>
            <p>
              Para calcular tus avances y tener un mejor seguimiento, agrega la
              siguiente información
            </p>
            <div className="sidebar-edit__img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                enableBackground="new 0 0 512 512"
                viewBox="0 0 512.003 512.003"
              >
                <path
                  d="M479.684 425.186c-.536-10.974-2.118-21.854-2.609-32.837-.313-6.988-.254-13.852-1.191-20.81-.916-6.811-.996-13.605-1.83-20.384-.401-3.276-1.518-6.368-1.982-9.614-.395-2.772-.178-5.619-.461-8.409-.784-7.705-2.229-15.307-2.956-23.034-1.32-14.052-3.974-27.72-4.888-41.819-.978-15.077-5.193-29.536-7.053-44.455-1.705-13.67-4.313-27.483-4.908-41.257-.3-6.943.095-13.656-.96-20.571-1.294-8.488-1.926-16.804-2.439-25.375-.433-7.263-.507-14.551-1.371-21.777-.872-7.284-2.009-14.441-2.009-21.799-.001-14.174-1.32-28.089-4.469-41.916-1.585-6.958-2.758-13.905-3.708-20.981-.805-5.996.123-13.756-2.131-19.433-2.09-5.267-6.814-6.391-11.863-7.227-6.278-1.039-12.485-2.065-18.785-2.986-6.326-.923-12.328-.461-18.572.498-6.828 1.049-14.229.32-21.17.309-6.157-.009-12.392-.644-18.53-.019-7.921.807-15.454 1.711-23.461 1.55-7.076-.143-14.186-.568-21.235.239-7.288.832-14.213 2.584-21.601 2.338-12.967-.435-25.828 1.451-38.735 2.454-13.568 1.054-26.877-.524-40.412 1.313-4.022.546-8.125.148-12.177.578-3.827.406-7.537 1.052-11.399 1.116-7.949.133-15.597.413-23.521 1.236-8.297.862-16.382 1.406-24.704 1.935-6.768.429-13.331 2.122-19.987 3.287-3.53.617-6.823 1.773-10.164 3.057-3.405 1.309-7.348 3.929-10.866 4.389-.082.01-.161.013-.243.022-.055-.248-.119-.496-.171-.745-.424-2.009-3.327-1.421-3.434.465-.008.142-.009.281-.014.422-1.251.077-2.464.32-3.698 1.178-2.032 1.415-3.074 3.886-4.224 5.974-.284.515-.583 1.02-.882 1.525-2.71 2.489-4.385 5.669-5.89 8.978-1.309 1.94-2.588 3.9-3.746 5.94-1.428 2.521-2.999 5.146-3.947 7.893-.305.884-.486 1.816-.638 2.76-1.922 3.552-3.783 7.132-5.31 10.878-2.652 6.51-6.48 12.467-8.945 19.024-2.449 6.524-5.647 13.244-9.098 19.33-2.629 4.635-5.853 9.409-5.868 14.952-.008 2.673.812 5.041 2.004 7.402 1.87 3.696 2.916 7.223 3.574 11.307 1.245 7.75 1.021 15.775 1.395 23.592.368 7.672 1.559 15.459 2.385 23.107 1.756 16.266 4.545 32.386 6.749 48.591 1.005 7.385 2.976 14.593 3.769 21.996.904 8.426 1.622 16.758 2.937 25.138 1.331 8.474.735 16.859 1.256 25.39a500.774 500.774 0 002.457 27.345c1.825 15.655 4.982 30.998 7.302 46.56 5.412 36.326 12.831 72.472 21.133 108.175.492 2.12 1.746 3.631 3.346 4.587 1.61 4.607 4.729 8.835 8.997 11.172 6.102 3.344 13.198 1.888 19.758 2.969 7.696 1.27 15.28.971 23.071.973 33.499.01 67.042.53 100.533.229 7.355-.066 14.562-1.448 21.965-1.438 8.111.009 16.286.252 24.381-.32 7.27-.513 14.362-2.225 21.633-2.131 3.782.049 7.151-.594 10.878-1.076 4.181-.539 8.401-.371 12.601-.799 7.37-.753 14.653-2.172 22.022-2.937 6.82-.708 13.671-1.198 20.435-2.161 7.622-1.086 15.277-2.152 22.912-3.117 7.845-.992 14.953-3.822 22.717-5.163 7.693-1.329 13.825-3.769 19.636-9.099 2.756-2.527 5.566-5.205 8.119-7.928 2.289-2.444 3.156-5.266 4.998-7.87 2.384-3.37 6.928-5.4 9.756-8.386 2.205-2.325 3.565-4.985 4.796-7.9 1.609-3.808 3.8-6.363 6.244-9.642a26.26 26.26 0 002.452-3.983c1.354-1.346 2.234-3.24 2.239-5.698 0-.087-.005-.175-.005-.263a57.79 57.79 0 00.478-1.819c.479-1.963.142-3.657-.668-4.995zm-373.415 65.34c-.578.822-1.043 1.967-1.499 3.16a8.706 8.706 0 01-2.138-1.786c.107-.66.133-1.365.037-2.128-1.792-14.552-6.598-28.687-9.663-43.014-3.433-16.049-6.071-32.248-9.484-48.303-3.224-15.164-6.126-30.576-8.585-45.884-2.647-16.482-5.202-33.424-5.517-50.142-.298-15.769-2.648-31.525-4.774-47.181-2.108-15.539-5.423-31.091-8.146-46.555-2.604-14.791-5.459-30.36-6.046-45.377-.271-6.969-.695-14.106-1.731-21.009-.496-3.305-1.071-6.675-2.094-9.867-.905-2.825-4.465-7.034-4.419-9.924.047-2.958 2.783-6.355 4.103-8.821 1.699-3.17 2.83-6.515 4.334-9.772 3.077-6.667 5.816-13.446 9.118-20.005 3.721-7.39 6.681-15.284 10.114-22.824a135.955 135.955 0 003.507-8.441c1.866-2.789 3.854-5.495 5.77-8.303a105.717 105.717 0 003.97-6.249c.157-.27.322-.64.493-1.024-.041 2.521.173 4.99.254 7.548.265 8.247.621 16.513.817 24.771.412 17.548-3.601 35.634-1.362 53.087 2.115 16.496 2.812 33.218 4.411 49.848.722 7.516.541 15.02 1.726 22.501 1.419 8.966 2.878 17.993 4.557 26.912 3.061 16.256 4.926 32.661 7.549 48.997 1.276 7.945 2.93 15.903 3.817 23.894.794 7.146 1.513 14.345 2.864 21.363 2.882 14.971 3.932 30.419 6.938 45.468 3.248 16.256 7.144 32.358 9.853 48.708 1.516 9.148 3.771 18.496 5.949 27.537.824 3.417 3.128 8.372 1.534 11.796-1.337 2.873-4.921 5.805-6.724 8.51-2.423 3.634-3.831 7.696-6.048 11.414-2.044 3.424-4.893 6.3-6.893 9.754-2.249 3.886-3.989 7.64-6.592 11.341zm347.022-41.906c-2.287 2.756-5.897 4.425-8.511 6.88-2.132 2-3.305 4.1-4.829 6.522-1.513 2.403-2.973 3.96-5.026 5.94-5.349 5.162-8.941 8.261-16.454 9.566-6.225 1.081-12.039 3.602-18.202 4.58-7.564 1.201-15.199 2.039-22.796 3.02-13.361 1.726-26.74 3.019-40.161 4.843-14.345 1.948-28.787 2.064-43.128 3.869-13.873 1.747-27.939-.345-41.781 1.186-15.188 1.68-30.583.937-45.887.941l-47.465.015c-8.261.003-16.523-.056-24.782.024-6.489.064-12.834-.847-19.254-.988.192-.265.387-.524.589-.773 2.66-3.287 3.534-6.571 5.545-10.21 1.929-3.489 4.866-6.328 6.916-9.741 2.032-3.381 3.319-7.099 5.458-10.439 1.846-2.884 4.228-5.288 6.253-8.006 2.563.525 5.566 1.943 7.789 2.104 5.937.429 11.84.532 17.791.574 10.398.074 20.07-.869 30.368-2.376 11.827-1.731 23.316-.768 35.179-1.258 5.551-.229 11.043-1.184 16.594-1.41 6.249-.254 12.531.087 18.78.193 5.433.092 10.932.661 16.353.069 5.698-.621 10.887-1.438 16.669-1.373 10.78.121 21.207-.496 31.95-1.057 11.371-.593 22.834-.789 34.15-2.143 5.348-.639 10.753-.978 16.122-1.48 5.618-.525 11.328.162 16.914-.639 6.46-.928 12.437-1.116 18.968-.895 5.973.201 11.557-.625 17.492-1.153 5.432-.484 10.927-1.023 16.277-2.082 1.858-.367 3.668-.557 5.407-.823-1.046 2.211-1.699 4.606-3.288 6.52zm9.737-15.333c-.041.064-.088.125-.134.188-4.224-.57-7.89-1.317-12.256-.475a163.958 163.958 0 01-18.169 2.455c-5.115.405-9.907 1.185-15.07 1.03-5.269-.159-10.674-.647-15.898.201-11.433 1.852-23.205 1.23-34.73 2.618-11.024 1.328-22.195 1.878-33.292 2.275-11.086.399-21.878 1.305-33 1.186-5.074-.054-9.961-.144-14.966.745-6.446 1.146-12.723.663-19.239.555-11.553-.192-22.67.501-34.176 1.158-11.487.657-22.794-.519-34.255 1.159-6.115.896-12.217 1.948-18.334 2.798-6.179.86-12.713.253-18.949.284-5.508.027-11.098.863-16.587.703a66.567 66.567 0 01-1.613-.074c.732-4.1-.373-8.455-1.449-12.676-4.302-16.876-8.169-34.333-10.599-51.56-1.062-7.521-3.411-14.956-4.881-22.439-1.717-8.743-3.348-17.641-4.638-26.449-2.279-15.539-4.288-30.948-6.161-46.593-1.904-15.908-5.886-31.523-7.438-47.5-1.763-18.155-6.851-35.883-8.86-54.004-.955-8.612-.969-17.395-1.796-26.05-.868-9.065-1.778-18.19-2.39-27.257-.619-9.131-1.722-18.241-1.547-27.436.201-10.5 1.14-20.975 1.227-31.477.082-10.066-1.177-20.066-1.782-30.087-.257-4.26-1.268-8.44-2.38-12.582 1.93-.188 3.823-.309 5.837-.841 3.36-.887 6.575-2.229 9.929-3.148 12.318-3.378 25.543-1.296 38.074-2.625 6.395-.679 12.773-1.47 19.206-1.81 6.992-.369 13.99.447 20.97-.341 12.952-1.462 26.087-2.661 39.128-2.234 6.319.207 12.769.415 19.078-.104 6.105-.501 12.231-.599 18.307-1.145 6.22-.559 11.787-1.315 18.098-1.046 7.372.316 14.245-.887 21.501-1.944 13.766-2.005 27.769.81 41.597-1.031 13.288-1.772 26.834-.303 40.226-.589 5.885-.125 11.23-1.736 17.184-1.456 5.885.276 11.937 1.301 17.683 2.468 1.196.243 3.006.795 4.3.643.29 2.308.814 5.464.891 6.143.792 6.946 2.178 13.983 3.719 20.806 3.107 13.752 6.044 26.941 6.041 41.167-.006 14.161 2.023 28.014 2.538 42.146.245 6.723.518 13.474.901 20.191.442 7.716 2.462 15.258 2.537 22.992.271 27.588 5.26 54.406 9.434 81.597 1.24 8.073 1.554 16.09 2.003 24.229.431 7.82 2.172 15.335 3.181 23.073.973 7.444 1.18 14.961 2.196 22.397 1.006 7.357 1.089 14.999 2.422 22.268.576 3.142 1.48 6.048 1.642 9.257.197 3.889-.015 7.641.511 11.53 1.007 7.456 1.872 14.696 1.884 22.241.022 14.515 2.694 28.904 2.312 43.436-.006.355.007.699.032 1.034z"
                  data-original="#000000"
                ></path>
                <path
                  d="M349.507 341.564c.387-.254.893-.854 0 0z"
                  data-original="#000000"
                ></path>
                <path
                  d="M429.128 394.917c-.674-4.247-.456-8.653-.464-12.947-.014-7.999.615-16.184-.353-24.145-1.079-8.87-3.672-17.49-5.496-26.208-1.691-8.09-2.096-16.476-2.907-24.69-.79-7.977.66-15.966-.381-23.935-1.123-8.612-2.537-17.195-3.016-25.88-.518-9.404-.63-18.478-2.391-27.792-2.963-15.668-2.379-32.18-7.931-47.31-1.935-5.271-5.028-9.985-10.868-11.363-7.01-1.653-14.043 1.566-20.924 2.492-19.597 2.643-38.792 8.042-58.507 10.031-19.769 1.995-39.761 3.961-59.589 5.207-19.653 1.233-39.218 1.517-58.899 2.004-10.035.248-19.826-1.297-29.825-1.568-8.628-.234-17.101-3.189-25.182.971-3.552 1.828-4.088 6.245-2.519 9.456.614 6.547.496 13.156 1.121 19.74.406 4.293-.245 8.591-.189 12.888.068 5.197.784 10.377 1.318 15.54.878 8.486.886 16.888 1.002 25.41.127 9.177 1.543 18.224 2.798 27.302 1.233 8.923 3.234 17.584 3.293 26.629.057 9.063 1.25 17.797 2.679 26.744 1.268 7.945 3.284 15.72 4.617 23.642 1.554 9.239 1.786 18.684 3.707 27.869.748 3.58 2.223 6.565 3.436 9.957.85 2.375 1.153 5.068 2.472 7.268 3.117 5.205 8.463 4.36 13.616 4.131 4.186-.187 8.19.156 12.347-.656 3.567-.697 7.036-1.83 10.651-2.324 8.832-1.207 17.246.51 25.983.854 7.114.28 15.012-.879 22.075-1.881 9.187-1.302 18.321.377 27.538-.141 3.455-.194 6.715-.962 10.109-1.475 4.37-.659 8.842-.109 13.239-.25 8.073-.26 15.959-1.309 24.095-1.315 17.06-.014 33.496-1.223 50.394-3.471 7.868-1.047 15.727.631 23.568-.441 3.957-.541 7.836-1.608 11.776-2.2 3.516-.528 7.192.24 10.657-.747 5.022-1.432 7.951-5.724 7.922-10.864-.015-2.204-.627-4.371-.972-6.532zM369.09 187.095c5.418-1.178 10.894-1.691 16.268-3.105 1.58-.415 4.848-1.671 6.543-1 1.823.72 2.095 2.872 2.691 4.604 3.842 11.152 3.719 22.988 5.432 34.528.185 1.239.399 2.472.622 3.704a19.67 19.67 0 00-3.82-.081c-4.167.348-8.657.331-12.789 1.017-6.019 1-11.404.786-17.467.93-4.59.109-9.117.961-13.703 1.25-.133-5.761.028-11.566-.697-17.28-.614-4.835-.564-9.558-.998-14.36-.192-2.115-.85-4.073-1.596-6.004 6.509-1.368 13.012-2.789 19.514-4.203zm-74.491 11.646c12.422-.934 24.928-1.559 37.195-3.865a731.376 731.376 0 0011.796-2.333c.334 2.285.608 4.581.47 6.967-.258 4.495.032 8.764.291 13.248.323 5.606-.192 11.28-.39 16.925-2.746.32-5.485.693-8.234 1.031-6.12.752-12.024.414-18.135.647-4.6.175-8.946 1.396-13.565 1.541-5.035.157-9.981 1.051-15.016 1.336-.666.038-1.332.092-1.998.133-.713-8.8-.208-17.659-.732-26.484-.174-2.921-.95-5.551-1.49-8.327 3.268-.297 6.539-.573 9.808-.819zm-13.975 72.464c.72 6.796 1.938 13.612 2.835 20.424-.574.064-1.145.135-1.72.193-11.013 1.093-21.95 1.201-32.958 2.224-8.029.745-16.105 1.568-24.175 1.876a35.863 35.863 0 01-.164-3.635c.05-5.109-.58-9.732-1.324-14.786-.803-5.455-.914-10.977-1.385-16.464-.344-4.008-1.13-7.985-1.563-11.98 19.582-.432 39.182-2.556 58.742-3.957.536 8.694.793 17.443 1.712 26.105zm-58.944-67.147c18.683-.005 37.294-2.05 55.897-3.829.013.116.027.236.038.35.394 3.826.686 7.307.541 11.175-.293 7.797-.222 15.493.144 23.222-19.482 1.526-38.964 3.95-58.47 4.631.164-11.665 1.694-24.349-1.434-35.514 1.096-.016 2.191-.035 3.284-.035zm-73.635-1.439a7.027 7.027 0 002.303-1.015c4.002-1.253 10.818 1.158 14.783 1.224 6.451.11 12.788.864 19.206 1.383 8.85.717 17.847.33 26.793.051.032.286.065.571.101.856.506 3.95.63 7.511.521 11.509-.211 7.698-.689 15.642-.662 23.445-7.813.542-15.578 1.396-23.352 2.336-11.549 1.397-23.031 3.474-34.564 4.999a3.915 3.915 0 00-1.253.39c-1.949-14.974-1.797-30.253-3.876-45.178zm6.131 76.29c-.807-8.294-.845-16.589-1.573-24.874.185.029.369.06.574.065 11.486.286 23.135-1.806 34.564-2.673 7.904-.599 15.76-1.479 23.677-1.988.552 9.498 1.379 19.279 2.509 28.683.723 6.028.916 11.983 1.352 17.94-10.622.091-21.118 2.432-31.664 3.639-8.45.966-16.887 1.837-25.305 2.885-1.723-7.826-3.362-15.748-4.134-23.677zm12.792 80.667a319.084 319.084 0 01-3.732-21.494c-1.254-9.001-1.403-17.905-3.071-26.826 18.503.505 36.857-5.453 55.324-5.344.293.001.585-.004.879-.004.081.515.146 1.029.238 1.544 1.775 10.005 1.201 20.281 2.123 30.363.453 4.972 1.524 9.595 2.469 14.47-3.905.389-7.812.674-11.693.778-3.823.104-7.225.498-10.954 1.235-3.878.767-7.735.355-11.581 1.411-3.512.964-7.094 1.384-10.574 2.282-2.999.772-5.583 1.828-8.606 2.181a1.92 1.92 0 00-.822-.596zm40.79 51.2c-6.212.111-12.074 1.341-18.21 2.037-3.314.377-6.489-.201-9.805-.229-.725-.006-1.548.088-2.37.151-.44-1.476-.809-3.057-1.291-4.231-1.956-4.761-2.705-9.511-3.365-14.608-1.177-9.107-2.08-18.205-4.162-27.162 4.595.965 9.209-.428 14.101-1.056 4.111-.528 7.468-1.797 11.682-1.773 4.056.024 7.816-.905 11.844-1.14 5.266-.307 10.498-.562 15.734-.884.054.667.12 1.334.227 2.005.845 5.306.406 10.122.831 15.435.311 3.888 1.134 7.487 1.227 11.404.164 6.873 1.035 13.972 2.011 20.927-6.215-.71-12.16-.989-18.454-.876zm21.663-72.962c-1.226-9.812-1.199-19.751-2.77-29.541-.141-.873-.294-1.728-.452-2.578 7.536-.318 15.045-.946 22.583-1.61 11.008-.971 21.936-1.149 32.958-2.077.907-.077 1.812-.174 2.719-.268.584 8.615.928 17.235 1.782 25.845.49 4.927.063 9.889.617 14.77.208 1.826.449 3.612.684 5.391-.534.031-1.065.077-1.6.093-8.654.257-17.24-.809-25.861.335-8.313 1.103-16.643 1.178-24.952 2.371-.956.137-1.915.272-2.876.405-.918-4.405-2.27-8.635-2.832-13.136zm56.817 70.968c-12.844 2.258-25.754.203-38.691 1.766-3.048.368-6.344.798-9.654 1.084-.405-6.963-2.294-14.01-2.42-20.907-.083-4.627-1.267-9.014-1.366-13.577-.089-4.136.345-8.143-.344-12.267-.215-1.29-.344-2.577-.445-3.863l.125-.01c8.762-.84 17.566-1.04 26.303-2.013 8.759-.974 17.418.238 26.192.183a68.482 68.482 0 002.721-.082c1.083 16.346 1.761 32.906 4.485 49.151-2.31.02-4.616.132-6.906.535zm4.004-142.187c-.787-7.356-1.305-14.741-2.096-22.094.289-.017.576-.038.864-.054 5.028-.277 10.003-1.116 15.016-1.313 4.63-.183 8.997-1.274 13.565-1.52 6.089-.328 12.02.115 18.135-.619 2.839-.341 5.666-.722 8.499-1.043.055.495.115.989.187 1.484 1.35 9.157.938 18.826 1.398 28.121.215 4.387-.11 8.548.507 12.944.217 1.544.295 3.078.328 4.609-11.345.911-22.718-.055-34.041.762-6.272.452-12.488 1.43-18.701 2.358-1.286-7.869-2.812-15.717-3.661-23.635zm8.77 79.645c-.433-2.317-.893-4.619-.996-6.974-.24-5.513-.482-10.822-.915-16.343-.585-7.453-.934-15.128-1.766-22.611 5.74-.847 11.48-1.729 17.273-2.158 11.092-.823 22.263.336 33.381-.588.355-.029.712-.05 1.067-.079.003.017.003.033.005.05 2.1 14.323 2.578 28.843 3.879 43.242a4.839 4.839 0 00-1.792 1.135c.142-.141.257-.251.36-.349-.098.064-.188.106-.244.098-1.033-.165-2.192-.242-3.231-.271-3.408-.095-6.915.273-10.326.383-7.885.254-16.215.739-24.003 2.035-4.258.709-8.466 1.64-12.692 2.43zm24.566 60.759c-5.974-.004-11.654.326-17.558.957.275-1.787-.193-3.57-1.596-4.687-1.222-8.525-1.449-17.212-2.2-25.751-.376-4.288-1.598-7.784-1.447-12.2.084-2.498-.17-4.999-.445-7.5 3.792-.598 7.571-1.304 11.342-1.947 8.584-1.462 17.719-1.691 26.426-1.87 3.951-.081 9.865.818 14.236-.364.946 7.865 1.582 15.953 2.239 23.837.371 4.435 1.066 8.839 1.37 13.278.344 5.018-.202 10.057.772 14.989-11.084.869-21.947 1.264-33.139 1.258zm34.317-124.229c-.74-4.665-.766-9.267-1.305-13.938-.578-5.021-1.464-9.847-1.548-14.924-.068-4.112.019-8.033-.878-12.083a45.507 45.507 0 01-.488-2.62c4.311-.32 8.58-1.065 12.892-1.181 5.592-.152 10.914.53 16.483-.45 4.474-.787 8.885-.977 13.422-1.272 2.234-.144 4.213.137 6.168.119.231 1.361.443 2.726.611 4.099.768 6.281.461 12.612.969 18.912.561 6.976 1.682 13.849 2.499 20.75-4.477.605-8.654 2.113-13.248 2.267-5.27.179-10.363 1.642-15.613 2.225-6.516.723-13.058 1.149-19.601 1.587a35.868 35.868 0 00-.363-3.491zm53.861 118.026c-5.836.653-11.442 2.671-17.364 2.756-6.009.084-11.804-.768-17.816-.041-2.491.302-4.964.629-7.436.946 1.502-8.835-.561-18.182-1.31-26.985-.737-8.676-1.568-17.467-2.556-26.092-.998-8.708-1.582-17.621-2.889-26.256-1.391-9.193-1.682-18.679-3.364-27.81-.04-.217-.064-.436-.098-.654 6.322-.405 12.642-.814 18.94-1.494 5.159-.557 10.461-1.972 15.613-2.177 2.697-.106 5.087.042 7.748-.593 2.19-.523 4.185-1.363 6.382-1.703.065 1.696.096 3.396.058 5.105-.12 5.379-.037 10.624.801 15.946.98 6.223.891 12.434 2.026 18.66 2.095 11.489 6.445 22.868 6.53 34.634.081 11.239-1.03 22.556.648 33.701.21 1.394-.005 2.11.47 2.143-1.909.329-4.617-.284-6.383-.086zm-14.741-294.133c-1.101-6.253-2.074-12.453-3.155-18.677-2.077-11.978-2.38-25.404-1.97-37.57.387-11.487-8.638-10.119-17.218-10.132-12.92-.019-25.862.128-38.782-.165-6.145-.139-12.302-.464-18.44.055-6.887.584-13.694 1.832-20.6 2.253-13.22.808-26.427-.778-39.619.878-15.208 1.91-30.071 1.224-45.337 1.86-6.47.268-13.032.776-19.454 1.607-7.344.95-14.686.392-21.972 1.77-6.882 1.3-14.139 3.084-21.159 3.112-5.84.024-13.261-1.913-18.321 1.896-3.927 2.956-4.394 7.629-3.952 12.19.056.578.134 1.15.211 1.724-1.145 12.617-.784 24.853-.28 37.583.213 5.398.916 10.689 1.302 16.072.418 5.807.946 13.102 2.876 18.587.928 2.637 3.822 5.407 5.9 7.174 3.491 2.965 7.756 2.624 12.083 2.055 6.299-.83 11.699-.316 17.984.271 6.7.625 13.219-.532 19.892-.864 13.163-.656 26.466.125 39.636.309 13.797.193 27.212-2.431 40.961-2.706 26.682-.533 53.241-1.159 79.961-1.052 6.152.026 12.111-.602 18.233-1.011 6.524-.436 12.82-.299 19.227-1.869 3.043-.745 7.087-1.522 9.323-3.918 3.543-3.795 2.068-10.577 2.749-15.3.811-5.592.901-10.554-.079-16.132zM364.544 116.9c-.39 5.534-.997 10.924-.032 16.398-1.405.082-2.806.18-4.195.33-14.344 1.547-29.165.706-43.583.685-13.536-.019-26.904 1.348-40.432 1.369-14.701.024-29.044 2.777-43.675 3.032-14.018.244-28.049-.38-42.072-.178-6.7.097-13.335 1.461-20.038 1.301-6.502-.156-12.746-1.673-19.263-.702-2.234.332-6.379 1.524-7.949.794-1.792-.832-3.232-3.51-3.783-5.212-2.243-6.943-1.778-14.723-2.933-21.854-1.327-8.188-1.819-16.472-2.224-24.768 1.391.081 2.699-.651 3.059-2.559a93 93 0 00.55-3.231c2.931.638 5.642.914 9.208.221 6.666-1.296 13.053-2.234 19.859-2.414 12.12-.32 24.161-.165 36.263-1.134 12.163-.975 24.303-2.368 36.51-2.655 5.182-.121 10.358.263 15.534.132 5.975-.153 11.899-1.204 17.883-1.409 5.675-.194 11.233-1.23 16.906-1.26 5.022-.027 10.096.352 15.107.192 5.509-.176 10.786-1.432 16.364-1.429 5.71.001 11.419.017 17.126.027 7.199.01 15.067 1.236 22.053-.837.081 3.037.8 6.195 1.078 9.088.254 2.653.867 5.271 1.051 7.919.24 3.45-.469 6.868-.29 10.321.312 6.044 2.349 11.715 1.918 17.833zm-2.518-56.03c-4.181 3.209-9.209 2.867-14.163 2.667-5.488-.221-10.977-.157-16.472-.148-10.792.017-21.5 1.498-32.187 1.328-10.615-.169-21.111.79-31.672 1.648-10.923.887-21.671.726-32.609 1.251-11.787.566-23.512 1.977-35.274 2.868-11.647.882-23.327.391-34.962 1.278-8.97.684-17.524 2.776-26.174 4.821a44.46 44.46 0 00-.127-5.102c-.174-2.202.51-5.156.027-7.255.014-.042.022-.073.034-.114a49.5 49.5 0 013.929.026c5.244.125 10.187.349 15.378-.516 6.243-1.04 12.585-2.637 18.864-3.339 5.63-.63 11.266-.236 16.941-.985 5.325-.702 10.747-1.076 16.105-1.401 12.425-.752 24.988.605 37.368-.729 12.081-1.3 23.645-2.368 35.828-2.236 11.741.129 22.933-1.481 34.587-2.528 11.514-1.034 23.338-.104 34.898-.133 5.735-.014 11.473-.026 17.208-.037-2.395 3.022-4.603 6.393-7.527 8.636zm23.311 69.027c.086.233.148.421.203.588-1.481.509-3.063.85-4.552 1.201-1.798.426-3.625.703-5.462.905l.01-.707c.018-1.383-.844-2.694-2.049-3.353-.424-4.154.098-8.376.15-12.559.074-6.079-2.173-11.52-2.818-17.473-.591-5.435-.401-10.468-1.567-15.858-.989-4.587-1.456-9.305-2.278-13.93 3.763-2.74 6.401-6.71 9.278-10.296 1.162-1.448 2.513-2.774 3.778-4.149-.077.624-.133 1.134-.128 1.37.075 3.441.311 6.871.548 10.305.455 6.575.169 13.405 1.127 19.911.906 6.157 1.849 12.157 3.188 18.241 1.69 7.683 1.374 13.754.721 21.485-.091 1.116-.499 3.37-.149 4.319zM71.49 140.832c-.352-2.722-4.523-3.932-5.247-.711-.952 4.24-3.601 7.723-4.805 11.897-1 3.469-2.021 6.911-2.187 10.542-.059 1.315 1.255 2.05 2.403 1.83 3.818-.737 5.384-5.919 6.264-9.191 1.235-4.585 4.196-9.53 3.572-14.367zm2.061 18.362c-.141.948-1.669 1.625-2.278 2.279-.824.886-1.403 1.998-2.009 3.036-1.465 2.505-3.056 4.734-4.729 7.094-1.518 2.14-5.602 10.421.19 10.763 1.632.097 2.702-1.308 3.387-2.622 1.273-2.443 2.489-4.615 4.086-6.883 1.697-2.412 2.642-5.49 4.525-7.693 1.547-1.811 2.65-2.601 2.808-5.165.212-3.37-5.474-4.228-5.98-.809zm-.132 22.772c-1.685 2.542-4.218 4.313-6.007 6.774-1.724 2.372-3.31 5.031-4.114 7.866-.444 1.567 1.248 2.601 2.568 1.974 2.916-1.384 4.089-4.279 5.715-6.873 1.669-2.664 3.952-4.854 5.418-7.65 1.244-2.372-2.106-4.312-3.58-2.091zm-1.794 15.035c-.985 2.211-1.746 4.517-2.708 6.738-.57 1.317-1.232 2.586-1.818 3.893-.325.726-.452 1.493-.734 2.195.378-.938-.472.353-.132-.004-.778.818-.716 2.343.373 2.901 3.171 1.625 5.706-2.21 6.737-4.673 1.232-2.941 2.035-6.019 3.163-8.993 1.063-2.801-3.651-4.824-4.881-2.057zM94.17 363.748c-1.515 6.36-7.853 14.62-4.393 21.133 1.028 1.934 3.684 1.236 4.336-.566 1.108-3.069 2.063-6.346 2.909-9.502.854-3.175 2.132-6.299 2.684-9.539.611-3.572-4.667-5.18-5.536-1.526zm10.839 16.563c-.692-3.654-5.703-2.37-6.03.817-.304 2.982-2.742 5.402-3.636 8.265-.925 2.956-1.196 6.48 1.107 8.839 1.21 1.24 3.008.767 3.92-.505 1.802-2.506 1.63-6.036 2.889-8.836 1.304-2.909 2.366-5.344 1.75-8.58zm66.277 92.843c-.224-3.543-5.399-3.586-5.542.001-.074 1.85-1.067 2.762-2.013 4.328-1.101 1.825-2.259 3.714-2.274 5.897-.009 1.069.899 1.925 1.945 1.947 3.073.064 4.687-2.843 5.946-5.235 1.248-2.369 2.11-4.194 1.938-6.938zm11.142.737a3.936 3.936 0 00-1.131-.047c-2.29.069-3.888 2.961-2.843 4.78-.515 1.176-1.15 2.301-1.738 3.47-.89 1.77-1.429 3.243-1.49 4.961-.992 1.931.571 4.223 3.268 4.465 1.145.104 2.219-.702 2.803-1.607 2.352-3.654 4.238-8.337 4.447-12.705.091-1.935-1.606-3.121-3.316-3.317z"
                  data-original="#000000"
                ></path>
              </svg>
            </div>
          </div>
          <div className="column-2">
            <Breadcrumb link="/profile" current="Editar perfil">
              <Link to="/profile">← Volver a mi perfil</Link>
            </Breadcrumb>
            <div style={{"marginBottom": "1rem"}} className="checkdone__button-section"></div>
            <Tabs
              value={tabValue}
              onChange={(e) => setTabValue(e)}
              items={[
                { value: 1, label: "1. Configuración" },
                { value: 2, label: "2. Actualizar", disabled: true },
              ]}
            />
            {loading && <EditPagePlaceholder />}
            {currentProfile.username && !loading && tabValue !== 2 && (
              <EditForm
                profile={currentProfile}
                callback={() => setTabValue(2)}
              />
            )}
            {tabValue === 2 && <CheckDone />}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
