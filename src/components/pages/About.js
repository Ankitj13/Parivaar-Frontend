import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div class="content-wrapper">
        <section class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1>About - Parivaar Health</h1>
              </div>
            </div>
          </div>
        </section>

        <section class="content">

      <div class="card">
        <div class="text-center">
      <img class="img-fluid pad " src="dist/img/about.png" alt="Photo" style={{width: 250}}/>
      </div>
        <div class="card-body text-center">
        Parivaar is a humanitarian organization inspired by the spiritual and humanistic ideals of Sri Ramakrishna and Swami Vivekananda, with its chief institutions and projects based in West Bengal and Madhya Pradesh. For last 18 years, Parivaar has worked towards the total care and overall development of children who are highly vulnerable to exploitation, victimization and trafficking, including orphans, street children, abandoned children, and extremely impoverished children from tribal areas. It also conducts many more humanitarian activities for the destitute and uncared, including elderly and shelterless.
        </div>
      </div>
    </section>

      </div>
    );
  }
}
