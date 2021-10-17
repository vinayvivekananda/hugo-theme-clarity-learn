$(document).ready(function () {
  $.fn.dataTable.ext.errMode = "none";
  const datatables = $(".datatable");
  for (const dt of datatables) {
    const datatable = $(dt);
    const url = datatable.attr("file");
    const prop = datatable.attr("prop");
    $.ajax(url, {
      dataType: "json",
      success: function (data, status, xhr) {
        data = data[prop];
        const columns = [];
        if (data.length) {
          const first = data[0];
          const titles = Object.keys(first);
          for (const title of titles) {
            columns.push({ title: title, data: title, default: "" });
          }
        }
        datatable.DataTable({
          data: data,
          columns: columns,
        });
      },
    });
  }
});
