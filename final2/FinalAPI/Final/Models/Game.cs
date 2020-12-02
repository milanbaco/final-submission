using System;
using System.Collections.Generic;

#nullable disable

namespace Final.Models
{
    public partial class Game
    {
        public int GameId { get; set; }
        public DateTime GameDate { get; set; }
        public string CourtNo { get; set; }
        public string Venue { get; set; }
        public int? UserId { get; set; }
        public double? Fee { get; set; }
    }
}
