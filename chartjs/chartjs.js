import { LightningElement } from "lwc";
import chartjs from "@salesforce/resourceUrl/chartjs";
import { loadScript } from "lightning/platformResourceLoader";

export default class Chartjs extends LightningElement {
  chart;

  connectedCallback() {
    Promise.all([loadScript(this, chartjs)])
      .then(() => {
        this.renderChart();
      })
      .catch((e) => console.error("library loading error", e));
  }

  renderChart() {
    const config = {
      type: "radar",
      data: {
        labels: ["STR", "DEX", "CON", "POW", "APP", "SIZ", "INT", "EDU"],
        datasets: [
          {
            label: "筋肉谷 武",
            data: [18, 8, 14, 13, 11, 17, 9, 12],
            fill: true,
            backgroundColor: "rgba(255, 99, 132, 0.1)",
            borderColor: "rgb(255, 99, 132)",
            pointBackgroundColor: "rgb(255, 99, 132)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(255, 99, 132)"
          },
          {
            label: "速川 駿",
            data: [8, 18, 14, 12, 13, 15, 12, 14],
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.1)",
            borderColor: "rgb(54, 162, 235)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)"
          },
          {
            label: "頭脳 明晰",
            data: [7, 12, 10, 11, 14, 12, 18, 22],
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.1)",
            borderColor: "rgb(75, 192, 192)",
            pointBackgroundColor: "rgb(75, 192, 192)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(75, 192, 192)"
          }
        ]
      },
      options: {
        scales: {
          r: {
            min: 3,
            max: 18,
            stepSize: 1
          }
        }
      }
    };

    const ctx = this.template.querySelector("canvas").getContext("2d");
    this.chart = new window.Chart(ctx, config);
  }
}
