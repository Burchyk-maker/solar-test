const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Січень",
      "Лютий",
      "Березень",
      "Квітень",
      "Травень",
      "Червень",
      "Липень",
      "Серпень",
      "Вересень",
      "Жовтень",
      "Листопад",
      "Грудень",
    ],
    datasets: [
      {
        label: "Генерація,квт*год",
        data: [80, 85, 90, 95, 100, 105, 115, 150, 120, 115, 100, 90],
        borderWidth: 1,
        backgroundColor: "rgba(0,120,0,0.6)",
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: 300,
        title: {
          display: true,
          text: "квт*год",
        },
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  },
});
