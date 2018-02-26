<template>
  <div>
    <table class="table">
      <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Username</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="table in table">
        <th>{{table.th}}</th>
        <td v-for="td in table.td">{{td}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "for-table",
        data() {
          return {
            table: [
              {
                th:1,
                td:["Mark","Otto","@mdo"]
              },
              {
                th:2,
                td:["Jacob","Thornton","@fat"]
              },
              {
                th:3,
                td:["Larry the Bird","Larry the Bird","@twitter"]
              }
            ]
          }
        }
    }
</script>

<style scoped>
  .table {
    width: 100%;
    max-width: 100%;
    margin-bottom: 20px;
  }
  .table>thead>tr>th {
    vertical-align: bottom;
    border-bottom: 2px solid #ddd;
    padding: 5px;
  }
  .table>tbody>tr>td, .table>tbody>tr>th, .table>tfoot>tr>td, .table>tfoot>tr>th, .table>thead>tr>td {
    padding: 5px;
    line-height: 1.42857143;
    vertical-align: top;
    border-bottom: 1px solid #ddd;
  }
</style>
