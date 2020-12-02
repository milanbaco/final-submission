using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Final.Models;

namespace Final.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamesController : ControllerBase
    {
        private readonly programmingchallengeContext _context;

        public GamesController(programmingchallengeContext context)
        {
            _context = context;
        }

        // GET: api/Games
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Game>>> GetGames()
        {
            return await _context.Games.ToListAsync();
        }

        // GET: api/Games/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Game>> GetGame(int id)
        {
            var game = await _context.Games.FindAsync(id);

            if (game == null)
            {
                return NotFound();
            }

            return game;
        }

        // PUT: api/Games/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGame(int id, Game game)
        {
            if (id != game.GameId)
            {
                return BadRequest();
            }

            _context.Entry(game).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GameExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Games
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Game>> PostGame(Game game)
        {
            _context.Games.Add(game);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGame", new { id = game.GameId }, game);
        }

        [HttpPost, Route("creategame")]
        public async Task<IActionResult> CreateGame(Game game)
        {
            try
            {
                _context.Add(game);
                await _context.SaveChangesAsync();
                return Ok(game);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route("updategame")]
        public async Task<IActionResult> UpdateGame(Game game)
        {
            try
            {
                _context.Games.Update(game);
                await _context.SaveChangesAsync();
                return Ok(game);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet, Route("futuregames")]
        public async Task<IActionResult> GetFutureGames()
        {
            var games = await _context.Games.Where(g => g.GameDate > DateTime.Now).ToListAsync();

            if (games != null)
            {
                return Ok(games);
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet, Route("getpastgames")]
        public async Task<IActionResult> GetPastGames()
        {
            var games = await _context.Games.Where(g => g.GameDate < DateTime.Now).ToListAsync();

            if (games != null)
            {
                return Ok(games);
            }
            else
            {
                return NotFound();
            }
        }

        // DELETE: api/Games/5
        [HttpDelete, Route("deletegame")]
        public async Task<IActionResult> DeleteGame(int gameId)
        {
            var game = await _context.Games.Where(g => g.GameId == gameId).FirstOrDefaultAsync();

            try
            {
                _context.Remove(game);
                await _context.SaveChangesAsync();
                return Ok(gameId);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


        private bool GameExists(int id)
        {
            return _context.Games.Any(e => e.GameId == id);
        }
    }
}
