using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Webapi.Models
{
    public class user
    {
        public int id {get;set;}
        public string firstname {get;set;}
        public string lastname {get;set;}
        public string password {get;set;}
        public string username {get;set;}
    }

}