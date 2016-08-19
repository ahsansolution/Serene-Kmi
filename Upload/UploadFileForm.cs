
namespace KBT.DIS.Upload
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [FormScript("Upload.UploadFile")]
    public class UploadFileForm
    {
        [DisplayName("File Name"), Required]
        public String FileName { get; set; }
    }
}