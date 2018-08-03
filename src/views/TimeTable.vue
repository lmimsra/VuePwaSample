<template>
    <div>
        <p class="title">タイムテーブル</p>
        <table class="table is-hoverable">
            <tr>
                <th>11:00~</th>
                <td>受付</td>
            </tr>
            <tr>
                <th>11:30~</th>
                <td>受付2</td>
            </tr>
            <tr>
                <th>12:00~</th>
                <td>BBQ</td>
            </tr>
            <tr>
                <th>12:30~</th>
                <td>イベント１</td>
            </tr>
            <tr>
                <th>13:30~</th>
                <td>イベント２</td>
            </tr>
            <tr>
                <th>15:30~</th>
                <td>閉会</td>
            </tr>
            <tr>
                <th>16:30~</th>
                <td>片付け、解散</td>
            </tr>
            <tr>
                <th>11:00~</th>
                <td>受付</td>
            </tr>
            <tr>
                <th>11:00~</th>
                <td>受付</td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        name: "TimeTable"
    }
</script>

<style scoped>
    table{
        margin-right: auto;
        margin-left: auto;
    }
</style>