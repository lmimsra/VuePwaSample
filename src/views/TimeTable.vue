<template>
    <div>
        <p class="title">タイムテーブル</p>
        <table class="table is-hoverable">
            <tr>
                <th>10:30~</th>
                <td>受付</td>
            </tr>
            <tr>
                <th>11:00~</th>
                <td>BBQスタート</td>
            </tr>
            <tr>
                <th>12:30~14:00</th>
                <td>
                    レクリエーション(検討中)<br/>
                    <ul>
                        <li>ビンゴ</li>
                        <li>じゃんけん大会</li>
                        <li>??早食い大会</li>
                        <li>etc...</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th>15:00</th>
                <td>閉会</td>
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