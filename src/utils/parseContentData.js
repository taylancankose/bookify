// firebaseden gelen JSON formatındaki datayı
// ÖRN:
//   {
//     "-N7fNdY1KuYShB8NLrDD": {
//         "date": "2022-07-23T14:07:38.176Z",
//         "text": "test",
//         "username": "teco"
//     },
//     "-N7fNhHht5XQagl6CWGa":
//     {
//      "date": "2022-07-23T14:07:49.042Z",
//      "text": "ea",
//      "username": "teco"
//     }
// }
// Buna döndürmek:
// {
//      {
//         "id": "-N7fNdY1KuYShB8NLrDD",
//         "date": "2022-07-23T14:07:38.176Z",
//         "text": "test",
//         "username": "teco"
//     },
//     {
//      "id": "-N7fNhHht5XQagl6CWGa",
//      "date": "2022-07-23T14:07:49.042Z",
//      "text": "ea",
//      "username": "teco"
//     }
// }

export default function (data) {
  return Object.keys(data)
    .map(key => {
      return {
        id: key,
        ...data[key],
      };
    })
    .sort(function (a, b) {
      return a.date > b.date ? -1 : a.date > b.date ? 1 : 0;
    });
}
