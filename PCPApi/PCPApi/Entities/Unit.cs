namespace PCPApi.Entities;

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

[Table("unit")]
public class Unit
{
    [Key]
    [Column("unitid")]
    public int UnitId { get; set; }

    [Column("unitabr")]
    [MaxLength(5)]
    public string UnitAbr { get; set; }

    [MaxLength(255)]
    [Column("unitdesc")]
    public string UnitDesc { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }

    [InverseProperty("Unit")]
    public List<Commodity> Commodities { get; set; }
}
