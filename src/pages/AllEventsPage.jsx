import AllEventsList from "../components/AllEventsList";
import ExpiredEvents from "../components/ExpiredEventsList";

function AllEventsPage() {
  return (
    <>
      <AllEventsList />
      <div className="middle-part" style={{ backgroundColor: "#00c26d" }}>
        <div className="text-center">
          <h2
            className="quate-text"
            style={{
              color: "#fff",
              fontSize: "32px",
              letterSpacing: "0.25px",
              marginBottom: "0px",
              padding: "64px 0px",
            }}
          >
            "İlerlemenin sırrı, başlamaktır." <br />
            Mark Twain
          </h2>
        </div>
      </div>
      <ExpiredEvents />
    </>
  );
}

export default AllEventsPage;
