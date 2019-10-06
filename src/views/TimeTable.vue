<template>
    <div>
        <!--TODO: タイムテーブルの変更-->
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
                    レクリエーション<br/>
                    <ul>
                        <li>コーラ早飲み大会！</li>
                        <li>じゃんけん大会！</li>
                        <li>ビンゴ！</li>
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
    table {
        margin-right: auto;
        margin-left: auto;
    }
</style>
