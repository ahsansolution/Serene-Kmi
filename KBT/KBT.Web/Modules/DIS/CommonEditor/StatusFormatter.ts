namespace KBT.DIS {

    @Serenity.Decorators.registerFormatter()
    export class StatusFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var classStatus = ''
            switch (ctx.value) {
                case "Draft":
                    {
                        classStatus = 'label label-warning'
                    } break;
                case "In Progress":
                    {
                        ctx.value = "In Progress";
                        classStatus = 'label label-info'
                    } break;
                case "UnComplete":
                    {
                        classStatus = 'label label-primary'
                    } break;
                case "Complete":
                    {
                        classStatus = 'label label-success'
                    } break;
                case "Reject":
                    {
                        classStatus = 'label label-danger'
                    } break;
            }
            return '<span class="' + classStatus + '">' + Q.htmlEncode(ctx.value) + '</span>'
        }
    }
}