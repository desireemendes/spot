import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

export default function HomepagePets() {
  return (
    <Container>
      <div class="row">
        <div class="col-md"></div>
        <div class="col-md"></div>
        <div id="examplepets" class="col-md-6">
          <div class="card-group">
            <div class="card">
              <img
                class="card-img-top"
                src="./images/petexample1.jpeg"
                height="250"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="./images/examplepet2.jpeg"
                height="250"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div class="card">
              <img
                class="card-img-top"
                src="./images/petexample3.jpeg"
                height="250"
                alt="Card image cap"
              />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>

          <div class="col-md"></div>
        </div>
      </div>
    </Container>
  );
}
