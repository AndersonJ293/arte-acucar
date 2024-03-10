using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PCPApi.Entities;

[Table("company")]
public class Company
{
    [Key]
    [Column("companyid")]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Column("companyname")]
    [Required]
    public string CompanyName { get; set; }

    [Column("created_at", TypeName = "timestamp")]
    public DateTime CreatedAt { get; set; }

    [Column("updated_at", TypeName = "timestamp")]
    public DateTime UpdatedAt { get; set; }
}
