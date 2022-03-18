const AppointmentCard = ({ cardData }) => {
  return (
    <>
      <div className="d-flex flex-column ">
        {/* Card 1 */}
        <div
          className={`row appointment-card card ${
            cardData.status === "cancelled" ? "text-secondary" : ""
          }`}
        >
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-start">
              <span className="h6">{cardData.id}</span>
              <h5 className="card-title">{cardData.name}</h5>
              <h6
                className="card-subtitle mb-4 text-secondary"
                style={{ fontSize: "18px" }}
              >
                {cardData.title}
              </h6>
              <div
                className={`${
                  cardData.status === "confirmation pending"
                    ? "text-danger"
                    : cardData.status === "confirmed"
                    ? "text-success"
                    : "text-secondary"
                } mt-3  d-flex `}
              >
                <div
                  className={`${
                    cardData.status === "confirmation pending"
                      ? "bg-danger"
                      : cardData.status === "confirmed"
                      ? "bg-success"
                      : "bg-secondary"
                  } dot`}
                ></div>{" "}
                <p className="h6">&nbsp;&nbsp;{cardData.status}</p>
              </div>
            </div>
            <div className="d-flex  justify-content-end flex-wrap align-content-center">
              <div
                className={`d-flex flex-column ${
                  cardData.status === "cancelled"
                    ? "text-secondary"
                    : "text-primary"
                }`}
              >
                <div className="p-1 ">{cardData.date}</div>
                <div className="p-1">{cardData.time}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppointmentCard;