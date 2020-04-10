using System;
using System.Diagnostics;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using UploadDeImagens.Models;
using Microsoft.AspNetCore.Hosting;
namespace UploadDeImagens.Controllers
{
    public class ProductController : Controller
    {
        private IWebHostEnvironment webHostEnvironment;

        public ProductController(IWebHostEnvironment webHostEnvironment)
        {
            this.webHostEnvironment = webHostEnvironment;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult UploadCkEditor(IFormFile upload)
        {
            var fileName = DateTime.Now.ToString("yyyyMMddHHmmss") + upload.FileName;
            var path = Path.Combine(Directory.GetCurrentDirectory(),
            webHostEnvironment.WebRootPath, "uploads", fileName);

            var stream = new FileStream(path, FileMode.Create);

            upload.CopyToAsync(stream);

            return new JsonResult(new { Path = "/uploads/" + fileName });
        }

        public IActionResult FileBrowse()
        {
            var dir = new DirectoryInfo(Path.Combine(Directory.GetCurrentDirectory(),
            webHostEnvironment.WebRootPath, "uploads"));
            ViewBag.fileInfos = dir.GetFiles();
           return View(nameof(FileBrowse));
        }


    }
}
