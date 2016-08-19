
namespace KBT.DIS.Forms
{
    using Serenity.ComponentModel;
    using Serenity.Web;
    using System;

    [FormScript("DIS.ProductsExcelImport")]
    public class ProductsExcelImportForm
    {
        [FileUploadEditor, Required]
        public String FileName { get; set; }
    }
}
