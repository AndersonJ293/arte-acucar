using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PCPApi.Entities;

public class User
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int UserId { get; set; }

    [ForeignKey("companyid")]
    public int CompanyId { get; set; }

    [MaxLength(255)]
    [Required]
    public string DisplayName { get; set; }

    [MaxLength(255)]
    [Required]
    public string Email { get; set; }

    [MaxLength(255)]
    public string? PhotoURL { get; set; }

    public DateTime CreatedAt { get; set; }

    public DateTime UpdatedAt { get; set; }

    // Navigation property
    public Company Company { get; set; }
}
