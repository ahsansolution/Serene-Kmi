
namespace KBT.DIS.Upload
{
    using Serenity.Services;
    using System;

    public class UploadFileRequest : ServiceRequest
    {
        public String FileName { get; set; }
    }
}